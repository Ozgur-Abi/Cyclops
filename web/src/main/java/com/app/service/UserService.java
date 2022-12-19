package com.app.service;

import com.app.entity.MyUserDetails;
import com.app.entity.User;
import com.app.repository.UserRepository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findUserByEmail(email);

        user.orElseThrow(()->new UsernameNotFoundException("user with email " + email + " not found"));

        return user.map(MyUserDetails::new).get();
    }

    public User save(User user) throws Exception {
        List<User> userList = userRepository.findAll();
        for (int i = 0; i <userList.size(); i++)
            if (user.getEmail() == userList.get(i).getEmail())
                throw new Exception("This user already exists");
        return userRepository.save(user);
    }

    public void delete(UUID id) {
        userRepository.deleteById(id);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findOneById(UUID id) {
        return userRepository.findUserById(id);
    }

    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email).get();
    }

    public List<User> findUsersByUsernameContaining(String username) {
        return userRepository.findUsersByUsernameContaining(username);
    }

    public Long count() {
        return userRepository.count();
    }
}