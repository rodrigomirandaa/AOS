package com.example.atv04.controller;

import com.example.atv04.service.ExperienceService;
import com.example.atv04.model.Experience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/experience")
    public List<Experience> getAllInfo(){
        return experienceService.findAll();
    }

    @GetMapping("/experience/{id}")
    public Experience getById(@PathVariable Long id){
        return experienceService.findById(id);
    }

    @PostMapping("/experience")
    public Experience createExperience(@RequestBody Experience experience){
        return experienceService.save(experience);
    }

    @PutMapping("/experience/{id}")
    public Experience updateExperience(@PathVariable Long id, @RequestBody Experience experience){
        Experience existingExperience = experienceService.findById(id);

        if (existingExperience != null){
            existingExperience.setYear(experience.getYear());
            existingExperience.setRole(experience.getRole());
            existingExperience.setCompany(experience.getCompany());
            existingExperience.setDescription(experience.getDescription());
            existingExperience.setTechnologies(experience.getTechnologies());

            return experienceService.save(existingExperience);
        } else {
            return null;
        }
    }

    @DeleteMapping("/experience/{id}")
    public void deleteExperience(@PathVariable Long id){
        experienceService.deleteById(id);
    }

}
