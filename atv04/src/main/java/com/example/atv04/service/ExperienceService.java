package com.example.atv04.service;


import com.example.atv04.model.Experience;
import com.example.atv04.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    public List<Experience> findAll(){
        return experienceRepository.findAll();
    }

    public Experience findById(Long id){
        return experienceRepository.findById(id).orElse(null);
    }

    public Experience save(Experience experience){
        return experienceRepository.save(experience);
    }

    public void deleteById(Long id){
        experienceRepository.deleteById(id);
    }

}
