package com.ner3k.dojoandninja.services;

import com.ner3k.dojoandninja.models.Dojo;
import com.ner3k.dojoandninja.models.Ninja;
import com.ner3k.dojoandninja.repositories.DojoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DojoService {
    @Autowired
    private DojoRepository dojoRepository;

    public List<Dojo> allDojo() {
        return dojoRepository.findAll();

    }

    public Dojo createDojo(Dojo dojo) {

        return dojoRepository.save(dojo);
    }

    public Dojo findDojo(Long id) {

        if (dojoRepository.findById(id).isPresent()) {
            return dojoRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public List<Ninja> ninjasInDojo(Long id) {
        Dojo dojo = findDojo(id);
        return dojo.getNinjas();
    }
}
