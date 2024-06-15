const Candidate = require('../models/Candidate');

exports.searchCandidates = async (req, res) => {
  const { location, jobRole } = req.query;
  try {
    const candidates = await Candidate.find({ location, jobRole });
    if (candidates.length === 0) {
      return res.status(404).json({ msg: 'No candidates found' });
    }
    res.json(candidates);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addCandidate = async (req, res) => {
  const { name, location, jobRole } = req.body;
  try {
    const newCandidate = new Candidate({ name, location, jobRole });
    const candidate = await newCandidate.save();
    res.json(candidate);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
