Role.create_with({name: "Admin", description: "Administrator"}).find_or_create_by(id: 1)
Role.create_with({name: "Coordinator", description: "It is in the top of the teacher group"}).find_or_create_by(id: 2)
Role.create_with({name: "EvaluatorAgent", description: "Belongs to the teacher group"}).find_or_create_by(id: 3)
