const { checkRecordExists, updateRecord } = require("../utils/sqlFunctions");
const cloudinary = require("../utils/cloudinary");

const updateProfile = async (req, res) => {
  try {
    const transparency = await checkRecordExists(
      "transparency",
      "id",
      req.user.userId
    );

    const updates = {
      ...req.body,
    };
    await updateRecord(
      "transparency",
      updates,
      "firstTrimester",
      profile.profileId
    );
    res.json({ message: "Profile Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateProfile,
};
