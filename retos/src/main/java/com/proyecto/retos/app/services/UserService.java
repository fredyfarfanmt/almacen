/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.proyecto.retos.app.services;

import com.proyecto.retos.app.entities.User;
import com.proyecto.retos.repositories.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author bmao9
 */
@Service
public class UserService {
    
    @Autowired
    private UserRepository repository;
    
    public User save(User user){
        if(user.getId()==null){
            return repository.save(user);
        }
        else{
            Optional<User> resultado = repository.getUser(user.getId());
            if (resultado.isPresent()){
                return user;
            }
            else{
                return repository.save(user);
            }
        }
    }
    
}
