### Tugas 01-thermometer

```
# Start Writing Here

SET temperatur TO INPUT()
SET tipe TO INPUT()

IF tipe = "fahrenheit":    
    OUTPUT((temperatur - 32) * (5/9))

ELSE IF tipe = "kelvin":
    OUTPUT((temperatur - 273.15))

ELSE IF tipe = "celcius":
    OUTPUT(temperatur)

else :
    OUTPUT("tipe yang dimasukan salah")
```
