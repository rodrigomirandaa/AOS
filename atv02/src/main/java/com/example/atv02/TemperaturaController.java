package com.example.atv02;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TemperaturaController {

    @GetMapping("/celsiusParaFahrenheit")
    public String converterCelsiusParaFahrenheit(@RequestParam("grau") double celsius) {
        double fahrenheit = (celsius * 9 / 5) + 32;
        return celsius + "°C é igual a " + fahrenheit + "°F";
    }


    @GetMapping("/fahrenheitParaCelsius")
    public String converterFahrenheitParaCelsius(@RequestParam("grau") double fahrenheit){
        double celsius = (fahrenheit - 32) * 5 / 9;
        return fahrenheit + "ºF é igual a " + celsius + "ºC";
    }

}
