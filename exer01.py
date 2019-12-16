num=""
num = input("Introdueix el nombre de paraules: ")
value=int(num)
cadenes=[]
for i in range(value):
  cadena=input("introduce elemento: ")
  cadenes.append(cadena)
  
print(num, value, cadena, cadenes)


# cadenes=[]
while (True):
  cadena=input("introduce elemento: ")
  if cadena == "":
    break
  else:  
    cadenes.append(cadena)
num = len(cadenes)  


acercar=input("paraula a cercar: ")
cuantes=cadenes.count(acercar)





while (cuantes > 0):
  print(num, cuantes, cadena, cadenes)
  cadenes.remove(acercar)
  cuantes=cadenes.count(acercar)
  

print(num, cuantes, cadena, cadenes)
