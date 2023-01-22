const mongoose = require("mongoose");
const { prescriptionScheema } = require("./prescription");
const { patientScheema } = require("./patient_schema");
const meetingScheemas = new mongoose.Schema(
  {
    meetingId: {
      type: String,
      default: Date.now(),
    },
    pdfLink: { type: String, default: "test1.pdf" },
    meetingLink: String,
    prescription: prescriptionScheema,
    active: { type: Boolean, default: true },
    patientDetail: patientScheema,
    doctorSinId: String,
    createdBy: String,
  },
  { timestamps: true }
);

const meetingSchemas = mongoose.model("meetingSchemas", meetingScheemas);
module.exports = { meetingSchemas };
