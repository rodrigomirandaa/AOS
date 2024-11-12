const PersonalInfo = require('../models/personalInfo'); // Importando o modelo

// Função para recuperar todas as informações pessoais
const getAllPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findAll();
    res.status(200).json(personalInfo); // Retorna as informações pessoais em formato JSON
  } catch (error) {
    console.error("Erro ao recuperar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao recuperar informações pessoais', error: error.message });
  }
};

// Função para criar uma nova informação pessoal
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
    res.status(201).json(newPersonalInfo); // Retorna as informações criadas
  } catch (error) {
    console.error("Erro ao criar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao criar informações pessoais', error: error.message });
  }
};

// Função para atualizar informações pessoais
const updatePersonalInfo = async (req, res) => {
  const { id } = req.params; // Recuperando o id das informações pessoais a ser atualizada
  const { hero_content, about_text, address, phone_no, email } = req.body;
  
  try {
    const personalInfo = await PersonalInfo.findByPk(id); // Encontrar as informações pessoais pelo ID
    if (!personalInfo) {
      return res.status(404).json({ message: 'Informações pessoais não encontradas' });
    }
    
    // Atualizando as informações pessoais
    personalInfo.hero_content = hero_content || personalInfo.hero_content;
    personalInfo.about_text = about_text || personalInfo.about_text;
    personalInfo.address = address || personalInfo.address;
    personalInfo.phone_no = phone_no || personalInfo.phone_no;
    personalInfo.email = email || personalInfo.email;
    
    await personalInfo.save(); // Salvando as alterações
    res.status(200).json(personalInfo); // Retorna as informações atualizadas
  } catch (error) {
    console.error("Erro ao atualizar informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao atualizar informações pessoais', error: error.message });
  }
};

// Função para excluir informações pessoais
const deletePersonalInfo = async (req, res) => {
  const { id } = req.params; // Recuperando o id das informações pessoais a ser deletada
  
  try {
    const personalInfo = await PersonalInfo.findByPk(id); // Encontrar as informações pessoais pelo ID
    if (!personalInfo) {
      return res.status(404).json({ message: 'Informações pessoais não encontradas' });
    }
    
    await personalInfo.destroy(); // Excluindo as informações pessoais
    res.status(200).json({ message: 'Informações pessoais deletadas com sucesso' }); // Resposta após a exclusão
  } catch (error) {
    console.error("Erro ao excluir informações pessoais:", error);
    res.status(500).json({ message: 'Erro ao excluir informações pessoais', error: error.message });
  }
};

module.exports = { getAllPersonalInfo, createPersonalInfo, updatePersonalInfo, deletePersonalInfo };
