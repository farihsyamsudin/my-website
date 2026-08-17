const VALID_SHEETS = ['Hero', 'Skills', 'Insights', 'Education', 'Experience', 'Awards'];

// Jalankan fungsi ini sekali saja di editor Apps Script untuk membuat semua sheet
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  VALID_SHEETS.forEach(sheetName => {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (sheetName === 'Hero') {
        sheet.appendRow(['id', 'title', 'subtitle', 'image']);
        // Default data
        sheet.appendRow([Utilities.getUuid(), 'Hi, I\'m John Doe', 'A passionate software developer creating beautiful, responsive, and user-centric web applications.', '']);
      } else if (sheetName === 'Skills') {
        sheet.appendRow(['id', 'name']);
        sheet.appendRow([Utilities.getUuid(), 'React']);
      } else if (sheetName === 'Insights') {
        sheet.appendRow(['id', 'title', 'content', 'date']);
      } else if (sheetName === 'Education' || sheetName === 'Experience') {
        sheet.appendRow(['id', 'period', 'title', 'organization', 'description']);
      } else if (sheetName === 'Awards') {
        sheet.appendRow(['id', 'title', 'year', 'issuer']);
      }
    }
  });
}

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let result = {};
  
  VALID_SHEETS.forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      const data = sheet.getDataRange().getDisplayValues(); // <--- Changed from getValues() to getDisplayValues()
      if (data.length > 1) {
        const headers = data[0];
        const rows = data.slice(1);
        result[sheetName] = rows.map(row => {
          let obj = {};
          headers.forEach((header, i) => {
            obj[header] = row[i];
          });
          return obj;
        });
      } else {
        result[sheetName] = [];
      }
    }
  });
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  try {
    const postData = JSON.parse(e.postData.contents);
    const { action, sheetName, data } = postData;
    
    if (!VALID_SHEETS.includes(sheetName)) throw new Error("Invalid sheet");
    
    const sheet = ss.getSheetByName(sheetName);
    
    if (action === 'create') {
      const id = Utilities.getUuid();
      const headers = sheet.getDataRange().getValues()[0];
      
      // Auto-fill date if it exists in header and not provided
      if (headers.includes('date') && !data.date) {
        data.date = new Date().toISOString();
      }

      const row = headers.map(h => h === 'id' ? id : (data[h] || ''));
      sheet.appendRow(row);
      return ContentService.createTextOutput(JSON.stringify({ success: true, id }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === 'update' || action === 'delete') {
      const id = data.id;
      const sheetData = sheet.getDataRange().getValues();
      let rowIndex = -1;
      
      for (let i = 1; i < sheetData.length; i++) {
        if (sheetData[i][0] === id) {
          rowIndex = i + 1;
          break;
        }
      }
      
      if (rowIndex !== -1) {
        if (action === 'delete') {
          sheet.deleteRow(rowIndex);
          return ContentService.createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);
        }
        
        if (action === 'update') {
          const headers = sheetData[0];
          headers.forEach((h, i) => {
            if (h !== 'id' && data[h] !== undefined) {
              sheet.getRange(rowIndex, i + 1).setValue(data[h]);
            }
          });
          return ContentService.createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'ID not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// =========================================================================
// SEEDER FUNCTION (Jalankan ini SATU KALI saja untuk mengisi data awal)
// =========================================================================
function seedData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Helper to clear and seed
  function seedSheet(sheetName, dataRows) {
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return;
    
    // Clear existing data except header
    if (sheet.getLastRow() > 1) {
      sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
    }
    
    // Insert new data
    dataRows.forEach(row => {
      sheet.appendRow([Utilities.getUuid(), ...row]);
    });
  }

  // 1. Seed Hero
  seedSheet('Hero', [
    ["Hi, I'm Farih Syamsudin", "Software Engineering Specialist | Laravel • Vue.js • PostgreSQL", ""]
  ]);

  // 2. Seed Skills
  seedSheet('Skills', [
    ["PHP / Laravel"],
    ["JavaScript / TypeScript"],
    ["Vue.js"],
    ["React"],
    ["PostgreSQL / SQL"],
    ["Python"],
    ["Docker"],
    ["Cybersecurity / Pentesting"]
  ]);

  // 3. Seed Insights (Empty for now)
  seedSheet('Insights', []);

  // 4. Seed Education
  seedSheet('Education', [
    ["2021 - 2026", "Bachelor of Science in Marine Information System", "Universitas Pendidikan Indonesia (UPI)", "CGPA: 3.82/4.00. Developed Mangrovia (GIS) and I-CONEMCIL. Thesis on Automatic Identification Systems for Illegal Transhipment Detection."]
  ]);

  // 5. Seed Experience
  seedSheet('Experience', [
    ["Aug 2024 - Present", "Software Engineering Specialist", "PT IlmuKomputerCom Braindevs Sistema", "Developed and maintained enterprise web applications using Laravel, Vue.js, PostgreSQL, and REST API. Built platforms for Ministry of Environment and Forestry (KLHK), BNSP, Polri, and BPK."],
    ["Nov 2022 - May 2024", "Teaching and Research Project Assistant", "Laboratorium of Marine Information System UPI", "Assisted in Web Programming and OOP practicum. Conducted research on Information Extraction from AIS Data. Contributed to Fish Stock Graph Learning app."],
    ["Feb 2023 - Feb 2024", "Multimedia Specialist", "Public Relations & Communications Division", "Developed and maintained the organization's official website using WordPress."]
  ]);

  // 6. Seed Awards
  seedSheet('Awards', [
    ["Cybersecurity Recognition", "Jan 2025", "Sidoarjo Regency Government"],
    ["1st Winner at Pekan Kompetisi SIK", "Nov 2024", "Pekan Kompetisi SIK"]
  ]);
}

