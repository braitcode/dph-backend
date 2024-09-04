import express from 'express';
import { getAllUsers, getOneUser, deleteUser, updateUser, updateUserRole } from '../controllers/user.js';
import { isLoggedIn } from '../middlewares/auth.js';
import { upload } from '../helpers/multer.js';

const router = express.Router();

router.get("/users", getAllUsers)
router.get("/user/:userId", getOneUser)
router.delete("/delete/:userId", deleteUser)
router.put("/user/update/:userId", isLoggedIn, upload.single('image'), updateUser)
router.post("/user/role", isLoggedIn, updateUserRole)

export default router