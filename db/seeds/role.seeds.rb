Role.create_with({description: "Estudiante"}).find_or_create_by(permission_level: 1)
Role.create_with({description: "Docente"}).find_or_create_by(permission_level: 2)
Role.create_with({description: "Coordinador"}).find_or_create_by(permission_level: 3)
