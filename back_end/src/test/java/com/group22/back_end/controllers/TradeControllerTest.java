package com.group22.back_end.controllers;

import com.group22.back_end.models.Book;
import com.group22.back_end.models.Counterparty;
import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import com.group22.back_end.services.TradeService;
import org.apache.tomcat.jni.Local;
import org.h2.command.dml.MergeUsing;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class TradeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TradeService tradeService;

    @Test
    public void TestGetAllTrades() throws Exception{

        LocalDate tradeDate=LocalDate.parse("2018-09-12");
        LocalDate settleDate=LocalDate.parse("2020-08-11");
        Book bookId = new Book();
        bookId.setBookId(2);

        Counterparty counterpartyId = new Counterparty();
        counterpartyId.setCounterpartyId(3);

        Security securityId = new Security();
        securityId.setSecurityId(4);

        Trade trade=new Trade(1,bookId,counterpartyId,securityId,5,"active",3.56f,"buy",tradeDate,settleDate);

        List<Trade> trades= List.of(trade);
        when(tradeService.getAllTrades()).thenReturn(trades);

        mockMvc.perform(get("/trades/get"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].bookId").value(2))
                .andExpect(jsonPath("$[0].counterpartyId").value(3))
                .andExpect(jsonPath("$[0].securityId").value(4))
                .andExpect(jsonPath("$[0].quantity").value(5))
                .andExpect(jsonPath("$[0].status").value("active"))
                .andExpect(jsonPath("$[0].price").value(3.56f))
                .andExpect(jsonPath("$[0].buySell").value("buy"))
                .andExpect(jsonPath("$[0].tradeDate").value("2018-09-12"))
                .andExpect(jsonPath("$[0].settlementDate").value("2020-08-11"));



    }

    @Test
    public void TestGetTradeNumbers() throws Exception{
        mockMvc.perform(get("/trades/numberTrades"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));


    }


}
