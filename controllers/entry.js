import EntryData from '../models/entry.js';

export const getEntry = async (req, res) => {
    try {
        const allEntries = await EntryData.find();

        res.status(200).json(allEntries)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createEntry = async (req, res) => {
    const entry = req.body;

    const newEntry = new EntryData(entry);
    
    try {
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const deleteEntry = async (req, res) => {
    const id = req.params.id;
    
    try {
        await EntryData.findByIdAndRemove(id).exec();
        res.send('Succesfully deleted');
    } catch (error) {
        console.log(error);
        
    }
}

