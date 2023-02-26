import express from "express";
import auth from "../middleware/auth.js";
import {
  adminLogin,
  updateAdmin,
  addAdmin,
  addFaculty,
  getFaculty,
  addSubject,
  getSubject,
  addStudent,
  getStudent,
  addDepartment,
  getAllStudent,
  getAllFaculty,
  getAllAdmin,
  getAllDepartment,
  getAllSubject,
  updatedPassword,
  getAdmin,
  deleteAdmin,
  deleteDepartment,
  deleteFaculty,
  deleteStudent,
  deleteSubject,
  createNotice,
  getNotice,
} from "../controller/adminController.js";
const router = express.Router();

// router.post("/login", adminLogin);
// router.post("/updatepassword", auth, updatedPassword);
// router.get("/getallstudent", auth, getAllStudent);
// router.post("/createnotice", auth, createNotice);
// router.get("/getallfaculty", auth, getAllFaculty);
// router.get("/getalldepartment", auth, getAllDepartment);
// router.get("/getallsubject", auth, getAllSubject);
// router.get("/getalladmin", auth, getAllAdmin);
// router.post("/updateprofile", auth, updateAdmin);
// router.post("/addadmin", auth, addAdmin);
// router.post("/adddepartment", auth, addDepartment);
// router.post("/addfaculty", auth, addFaculty);
// router.post("/getfaculty", auth, getFaculty);
// router.post("/addsubject", auth, addSubject);
// router.post("/getsubject", auth, getSubject);
// router.post("/addstudent", auth, addStudent);
// router.post("/getstudent", auth, getStudent);
// router.post("/getnotice", auth, getNotice);
// router.post("/getadmin", auth, getAdmin);
// router.post("/deleteadmin", auth, deleteAdmin);
// router.post("/deletefaculty", auth, deleteFaculty);
// router.post("/deletestudent", auth, deleteStudent);
// router.post("/deletedepartment", auth, deleteDepartment);
// router.post("/deletesubject", auth, deleteSubject);

router.post("/login", adminLogin);
router.post("/updatepassword", updatedPassword);
router.get("/getallstudent", getAllStudent);
router.post("/createnotice", createNotice);
router.get("/getallfaculty", getAllFaculty);
router.get("/getalldepartment", getAllDepartment);
router.get("/getallsubject", getAllSubject);
router.get("/getalladmin", getAllAdmin);
router.post("/updateprofile", updateAdmin);
router.post("/addadmin", addAdmin);
router.post("/adddepartment", addDepartment);
router.post("/addfaculty", addFaculty);
router.post("/getfaculty", getFaculty);
router.post("/addsubject", addSubject);
router.post("/getsubject", getSubject);
router.post("/addstudent", addStudent);
router.post("/getstudent", getStudent);
router.post("/getnotice", getNotice);
router.post("/getadmin", getAdmin);
router.post("/deleteadmin", deleteAdmin);
router.post("/deletefaculty", deleteFaculty);
router.post("/deletestudent", deleteStudent);
router.post("/deletedepartment", deleteDepartment);
router.post("/deletesubject", deleteSubject);

export default router;
