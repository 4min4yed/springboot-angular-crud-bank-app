package com.example.bank;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.http.MediaType.APPLICATION_JSON;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {"spring.datasource.url=jdbc:h2:mem:testdb","spring.jpa.hibernate.ddl-auto=create-drop"})
public class AccountControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void createAccount_shouldReturnCreated() throws Exception {
        String json = "{\"ownerName\":\"Charlie\",\"balance\":200.00}";
        mockMvc.perform(post("/api/v1/accounts").contentType(APPLICATION_JSON).content(json))
                .andExpect(status().isCreated());
    }

    @Test
    public void createAccount_negativeBalance_shouldReturnBadRequest() throws Exception {
        String json = "{\"ownerName\":\"Eve\",\"balance\":-50.00}";
        mockMvc.perform(post("/api/v1/accounts").contentType(APPLICATION_JSON).content(json))
                .andExpect(status().isBadRequest());
    }
}
