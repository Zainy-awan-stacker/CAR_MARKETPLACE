import User from "../model/User.js";
import Agency from "../model/agency.model.js";

export const registerAgency = async (req, res) => {
    try {
        const { name, address, city, contact, email } = req.body;
        const owner= req.user.id;
        //chek if agency already registered
        const agency = await Agency.findOne({owner})
        if (agency) {
            return res.status(400).json({ message: "Agency already registered" });
        }
        await Agency.create({ name, address, city, contact, email, owner });
        await User.findByIdAndUpdate(owner, { role:"agency"});
        res.status(201).json({ message: "Agency registered successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: "Server error" });
    }
}

  