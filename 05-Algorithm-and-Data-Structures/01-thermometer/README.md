### Tugas 01-thermometer

```
# Start Writing Here

SET temperatur TO INPUT()
SET tipe TO INPUT()

IF tipe EQUALS "fahrenheit":    
    OUTPUT((temperatur - 32) * (5/9))

ELSE IF tipe EQUALS "kelvin":
    OUTPUT((temperatur - 273.15))

ELSE IF tipe EQUALS "celcius":
    OUTPUT(temperatur)

else :
    OUTPUT("jenis yang dimasukan salah")

