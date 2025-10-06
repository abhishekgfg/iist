import puppeteer from "puppeteer";
import Student from "../Models/Student.js";

export const downloadResultPDF = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) return res.status(404).json({ message: "Student not found" });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // ✅ Same style as your uploaded image
    const html = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { background: #2563eb; color: white; text-align: center; padding: 10px; }
            .sub-header { font-size: 12px; margin: 0; }
            h3 { text-align: center; margin-top: 20px; }

            .info { margin-top: 20px; }
            .info p { margin: 4px 0; font-size: 13px; }

            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
            th, td { border: 1px solid #000; padding: 6px; text-align: center; }
            th { background: #f3f4f6; }

            .total-row { font-weight: bold; background: #f9fafb; }

            .result-box { display: flex; justify-content: flex-end; gap: 15px; margin: 25px 0; }
            .fail { background: #fee2e2; color: #dc2626; padding: 8px 16px; border-radius: 6px; font-weight: bold; }
            .status { background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; font-weight: bold; }

            .footer { margin-top: 20px; font-size: 11px; color: #444; }
            .footer p { margin: 3px 0; }
          </style>
        </head>
        <body>
          <!-- Top Header -->
          <div class="header">
            <h2>ONLINE RESULT</h2>
            <p class="sub-header">range of programs and research opportunities across multiple campuses.</p>
          </div>

          <!-- Course Name -->
          <h3>${student.result.course} - SEMESTER</h3>

          <!-- Student Info -->
          <div class="info">
            <p><b>Name:</b> ${student.result.name}</p>
            <p><b>Father's Name:</b> ${student.result.fatherName}</p>
            <p><b>Sr. No:</b> ${student.result.srNo}</p>
            <p><b>Roll No:</b> ${student.result.rollNo}</p>
            <p><b>Enrollment No:</b> ${student.result.enrollmentNo}</p>
            <p><b>Session:</b> ${student.result.session}</p>
          </div>

          <!-- Marks Table -->
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Subject</th>
                <th>Full Marks</th>
                <th>Passing Marks</th>
                <th>Marks Obtained</th>
              </tr>
            </thead>
            <tbody>
              ${student.result.subjects
                .map(
                  (s) => `
                  <tr>
                    <td>${s.sno}</td>
                    <td style="text-align:left; padding-left:10px;">${s.name}</td>
                    <td>${s.full}</td>
                    <td>${s.pass}</td>
                    <td>${s.obtained}</td>
                  </tr>`
                )
                .join("")}
              <tr class="total-row">
                <td colspan="2">Total</td>
                <td>${student.result.totalFull}</td>
                <td>${student.result.totalPass}</td>
                <td>${student.result.totalObt}</td>
              </tr>
            </tbody>
          </table>

          <!-- Result Buttons -->
          <div class="result-box">
            <div class="fail">RESULT</div>
            <div class="status">${student.result.status}</div>
          </div>

          <!-- Percentage + Grade -->
          <p><b>Percentage:</b> ${student.result.percentage}</p>
          <p><b>Result:</b> ${student.result.status}</p>
          <p><b>Grade:</b> ${student.result.grade}</p>

          <!-- Footer Notes -->
          <div class="footer">
            <p>B: 50% and above but below 60%, C: 40% and above but below 50%, 
            D: Below 40%, A++: 85% AND ABOVE, A+: 75% and above but below 85%, 
            A: 60% and above but below 75%</p>
            <p>Note: Delhi University will not be held accountable for errors in marks, even though submitted for verification.</p>
            <p>The original grade report will be final.</p>
            <p>For assistance, email: <b>digital@dgu.ac.in</b> / <b>dguniversityofficial@gmail.com</b></p>
          </div>
        </body>
      </html>
    `;

    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${student.result.name}_Result.pdf`
    );

    res.send(pdfBuffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
