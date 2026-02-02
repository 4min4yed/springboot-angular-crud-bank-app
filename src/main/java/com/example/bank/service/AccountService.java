package com.example.bank.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.bank.model.Account;
import com.example.bank.repository.AccountRepository;
import com.example.bank.exception.ResourceNotFoundException;

@Service
@Transactional
public class AccountService {

    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public List<Account> findAll() {
        return repository.findAll();
    }

    public Account findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with id " + id));
    }

    public Account create(Account account) {
        return repository.save(account);
    }

    public Account update(Long id, Account updated) {
        Account existing = findById(id);
        existing.setOwnerName(updated.getOwnerName());
        existing.setBalance(updated.getBalance());
        return repository.save(existing);
    }

    public void delete(Long id) {
        Account existing = findById(id);
        repository.delete(existing);
    }
}
