package com.ner3k.travel.services;

import com.ner3k.travel.models.Save;
import com.ner3k.travel.repositories.SaveRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveService {
    @Autowired
    private SaveRepository saveRepository;

    public Save save(Save save) {
        return saveRepository.save(save);
    }
    public Save findById(Long id) {
        if(saveRepository.findById(id).isPresent()){
            return saveRepository.findById(id).get();
        }
        else {
            return null;
        }
    }
    public void deleteById(Long id) {
        saveRepository.deleteById(id);
    }
    public List<Save> findAll() {
        return (List<Save>) saveRepository.findAll();
    }


}
