package com.ner3k.dojoandninja.services;

import com.ner3k.dojoandninja.models.Ninja;
import com.ner3k.dojoandninja.repositories.NinjaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NinjaService {
    @Autowired
    private NinjaRepository ninjaRepository;

    public List<Ninja> allNinja(){
        return ninjaRepository.findAll();
    }
    public Ninja getNinja(Long id){
        if(ninjaRepository.findById(id).isPresent()){
            return ninjaRepository.findById(id).get();
        }
        return null;
    }
    public Ninja createNinja(Ninja ninja){
        return ninjaRepository.save(ninja);
    }

}
