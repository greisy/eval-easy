after :scale_type do
  numeric = ScaleType.find_by_name("numerica")
  alphabetic = ScaleType.find_by_name("alfabetica")
  description = ScaleType.find_by_name("por descripcion")
  Scale.create_with({
    description: "su trabajo fue excelente;su trabajo fue muy bueno;se efectuo un buen trabajo;su trabajo fue regular;su trabajo fue regular;su trabajo fue regular;su trabajo fue deficiente;su trabajo fue deficiente;su trabajo no cumplió con los objetivos;su trabajo no cumplió con los objetivos;su trabajo no cumplió con los objetivos",
    minimum_grade: 0,
    maximum_grade: 10, 
    scale_type_id: numeric.id,
    grade_to_pass_default: 5 }).find_or_create_by(name: "Escala decimal")
  Scale.create_with({
    description: "muy bueno;muy bueno;muy bueno;bueno;bueno;bueno;bueno;regular;regular;regular;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente;deficiente",
    minimum_grade: 0,
    maximum_grade: 20,
    scale_type_id: numeric.id,
    grade_to_pass_default: 10}).find_or_create_by(name: "Escala vigesimal")
  Scale.create_with({
    description: "nivel notable en su proceso de aprendizaje; nivel suficiente en su proceso de aprendizaje; en proceso de logro del aprendizaje; serias dificultades en su proceso de aprendizaje",
    minimum_grade: 1,
    maximum_grade: 4,
    alphabetic_scale: "AD;A;B;C",
    scale_type_id: alphabetic.id,
    grade_to_pass_default: 2}).find_or_create_by(name: "Escala alfabetica")
  Scale.create_with({
    description: "excelente;bueno;regular;deficiente",
    minimum_grade: 1,
    maximum_grade: 4,
    scale_type_id: description.id,
    grade_to_pass_default: 2}).find_or_create_by(name: "Escala diferencial semantico")
  Scale.create_with({
    description: "aprobado;reprobado",
    minimum_grade: 1,
    maximum_grade: 2,
    scale_type_id: description.id,
    grade_to_pass_default: 2}).find_or_create_by(name: "Escala binaria")
end
