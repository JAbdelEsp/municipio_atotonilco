const {
  updateRecordInfo,
  getRecords,
  insertRecord,
  deleteRecord,
} = require("../utils/sqlFunctions");
const fs = require("fs").promises;

const Update = async (req, res) => {
  try {
    await updateRecordInfo("text_banners", req.body, "id", req.body.id);
    res.json({ message: "Cambios realizados con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("text_banners", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RegisterBanner = async (req, res) => {
  const { picture } = req.body;
  if (!picture) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("banners", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RegisterVideo = async (req, res) => {
  const { video } = req.body;
  if (!video) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("video", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecords("text_banners");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RecordsBanner = async (req, res) => {
  try {
    const records = await getRecords("banners");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RecordsVideo = async (req, res) => {
  try {
    const records = await getRecords("video");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Delete = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("text_banners", "id", req.query.id);
    if (deleteRec) {
      res.status(200).json(deleteRec);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteBanner = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("banners", "id", req.query.id);
    await deleteRecord("banners", "id", `${req.query.id}`);
    const route = "./public/banners/" + req.query.title;
    await fs.rmdir(route, { recursive: true }).then(() => {});
    if (deleteRec) {
      res.status(200).json(deleteRec);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteVideo = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("video", "id", req.query.id);
    await deleteRecord("video", "id", `${req.query.id}`);
    const route = "./public/video/" + req.query.title;
    await fs.rmdir(route, { recursive: true }).then(() => {});
    if (deleteRec) {
      res.status(200).json(deleteRec);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  Register,
  RegisterBanner,
  RegisterVideo,
  Records,
  RecordsBanner,
  RecordsVideo,
  Update,
  Delete,
  DeleteBanner,
  DeleteVideo,
};
