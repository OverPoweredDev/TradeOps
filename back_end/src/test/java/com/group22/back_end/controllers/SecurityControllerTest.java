
package com.group22.back_end.controllers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.group22.back_end.models.Book;
import com.group22.back_end.models.Counterparty;
import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import com.group22.back_end.services.SecurityService;
import com.group22.back_end.services.TradeService;

import java.time.LocalDate;

@SpringBootTest
@AutoConfigureMockMvc
public class SecurityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SecurityService securityService ;

    @Test
    public void getSecuritiesAboutToMatureByDateTest() throws Exception{

//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MMM-dd");
//
//        String dateInString = "2023-08-15";
//        Date maturityDate = formatter.parse(dateInString);

        mockMvc.perform(get("/securities/pastMaturity{date}", "2020/08/12"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));


    }

    @Test
    public void getSecuritiesPastMaturityByDateTest() throws Exception{
        mockMvc.perform(get("/securities/pastMaturity"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));


    }



    @Test
    public void getAllSecuritiesTest() throws Exception{

//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MMM-dd");
//
//        String dateInString = "2023-08-15";
//        Date date = formatter.parse(dateInString);

        mockMvc.perform(get("/securities/numberSecurities"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));






    }

    @Test
    public void getSecuritiesTest() throws Exception{
        mockMvc.perform(get("/securities/get"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));


    }

    @Test
    public void getSecuritiesByDateTest() throws Exception{
        mockMvc.perform(get("/securities/get/date"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));


    }
}
