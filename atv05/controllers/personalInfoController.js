const PersonalInfo = require('../models/personalInfo'); 


const getAllPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findAll();
    res.status(200).json(personalInfo); 
  } catch (error) {
    console.error("Erro ao recuperar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao recuperar informações pessoais', error: error.message });
  }
};


const createPersonalInfo = async (req, res) => {
  const { hero_content, about_text, address, phone_no, email } = req.body;
  
  try {
    const newPersonalInfo = await PersonalInfo.create({
      hero_content,
      about_text,
      address,
      phone_no,
      email
    });
    res.status(201).json(newPersonalInfo); 
  } catch (error) {
    console.error("Erro ao criar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao criar informações pessoais', error: error.message });
  }
};


const updatePersonalInfo = async (req, res) => {
  const { id } = req.params;
  const { hero_content, about_text, address, phone_no, email } = req.body;
  
  try {
    const personalInfo = await PersonalInfo.findByPk(id); 
    if (!personalInfo) {
      return res.status(404).json({ message: 'Informações pessoais não encontradas' });
    }
    
    
    personalInfo.hero_content = hero_content || personalInfo.hero_content;
    personalInfo.about_text = about_text || personalInfo.about_text;
    personalInfo.address = address || personalInfo.address;
    personalInfo.phone_no = phone_no || personalInfo.phone_no;
    personalInfo.email = email || personalInfo.email;
    
    await personalInfo.save();
    res.status(200).json(personalInfo); 
  } catch (error) {
    console.error("Erro ao atualizar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao atualizar informações pessoais', error: error.message });
  }
};


const deletePersonalInfo = async (req, res) => {
  const { id } = req.params; 
  
  try {
    const personalInfo = await PersonalInfo.findByPk(id); 
    if (!personalInfo) {
      return res.status(404).json({ message: 'Informações pessoais não encontradas' });
    }
    
    await personalInfo.destroy(); 
    res.status(200).json({ message: 'Informações pessoais deletadas com sucesso' }); 
  } catch (error) {
    console.error("Erro ao excluir informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao excluir informações pessoais', error: error.message });
  }
};

module.exports = { getAllPersonalInfo, createPersonalInfo, updatePersonalInfo, deletePersonalInfo };
