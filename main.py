#!C:\Users\Admin\AppData\Local\Programs\Python\Python37-32\python.exe

print ("Content-Type: text/html; charset=utf-8\n\n")

import ifcopenshell

file = ifcopenshell.open(r"C:\Users\Admin\Desktop\IX\BIM\Duplex_A_20110907.ifc")

import ifcopenshell.util.element


beams = file.by_type('IfcBeam')
beam_start = []
fill = 0
Length_mat = []

for beam in beams:
	fill = fill+1
	b_next = "beam"+str(fill)
	beam_start.append(b_next)
	for definition in beam.IsDefinedBy:
		if definition.is_a('IfcRelDefinesByProperties'): property_set = definition.RelatingPropertyDefinition
		if property_set.Name == "PSet_Revit_Dimensions":
			for property in property_set.HasProperties:
				if property.Name == "Length":
					beam_len = str((property.NominalValue.wrappedValue))
					Length_mat.append(beam_len)

Length_list = list(map(float, Length_mat))
width = 0.41
I = width*width/12
z = width**(0.5)
W = I/z
smax = 345000000
coef = 8*W*smax
coef_list = [coef]*len(Length_list)
load_N = [i / j for i, j in zip(coef_list, Length_list)]
load_t = [x/10000 for x in load_N]
load_2t = list(map(str,load_t))

print("________________________________Loads each beam can carry [in tones]: ")

index = 0
for t in load_t:
    index = index +1
    print("load for beam number: " + str(index) + " is " + str(t) + "_____________________________________________ ")
