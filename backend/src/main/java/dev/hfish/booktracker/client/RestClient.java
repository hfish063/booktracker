package dev.hfish.booktracker.client;

import dev.hfish.booktracker.client.model.BookDetailsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class RestClient {
    private final static String uri = "http://localhost:8000/details/";
    RestTemplate restTemplate;

    @Autowired
    public RestClient(RestTemplateBuilder builder) {
        restTemplate = builder.build();
    }

    public BookDetailsDto fetchDetailsForBook(String theTitle) {
        ResponseEntity<BookDetailsDto> response = restTemplate.getForEntity(formatUri(theTitle), BookDetailsDto.class);
        return response.getBody();
    }

    private String formatUri(String theTitle) {
        return uri + theTitle;
    }
}
