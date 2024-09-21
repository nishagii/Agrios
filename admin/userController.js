import userModel from "../backend/models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user (ishan)

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
      type: user.type,
      name: user.name,
      message: "Logged in successfully"
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error. User not logged",
    })
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user (ishan)

const registerUser = async (req, res) => {
  const { name, email, type, password } = req.body;
  try {
    //check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    //validate email format and strong password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be atleast 8 characters",
      });
    }

    //hashing password (ishan)

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      type: type,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token: token, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error. User not registered",
    });
  }
};

//list all users (ishan)


// List all users
const listUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await userModel.find({}, '-password'); // Exclude password from the response

    // Respond with the list of users
    res.json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error fetching users",
    });
  }
};

//update user details (sawani)

const updateUser = async (req, res) => {
  try {
    const { id, name, type, email, password } = req.body;

    // Find the user by id
    const user = await userModel.findById(id);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Update fields if they are provided
    user.name = name || user.name;
    user.type = type || user.type;
    user.email = email || user.email;

    // If password is provided, hash it before updating
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password should be at least 8 characters",
        });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save the updated user
    await user.save();

    res.json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error. User not updated",
    });
  }
};


//remove users from the database (sujan)

const removeUser = async (req, res) => {
  try {
    // Find the user by ID
    const user = await userModel.findById(req.body.id);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Delete the user from the database
    await userModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "User removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error. User not removed",
    });
  }
};

export default removeUser;



export { loginUser, registerUser, listUsers,updateUser,removeUser };
