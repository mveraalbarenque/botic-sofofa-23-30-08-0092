CREATE TABLE empresa (
    rut VARCHAR(10) PRIMARY KEY NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    direccion VARCHAR(120) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    correo VARCHAR(80) NOT NULL,
    web VARCHAR(50) NOT NULL
);

CREATE TABLE cliente (
    rut VARCHAR(10) PRIMARY KEY NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    direccion VARCHAR(120) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    correo VARCHAR(80) NOT NULL,
    rut_empresa VARCHAR(10),
    CONSTRAINT fk_empresa FOREIGN KEY (rut_empresa) REFERENCES empresa (rut)
);

CREATE TABLE herramienta (
    id_H INTEGER PRIMARY KEY NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    precioDia INTEGER NOT NULL
);

CREATE TABLE arriendo (
    folio INTEGER PRIMARY KEY NOT NULL,
    fecha DATE NOT NULL,
    dias INTEGER NOT NULL,
    valorDia INTEGER NOT NULL,
    garantia VARCHAR(30) NOT NULL,
    precioDia INTEGER NOT NULL,
    id_herramienta INTEGER NOT NULL,
    rut_cliente VARCHAR(10) NOT NULL,
    CONSTRAINT fk_herramienta FOREIGN KEY (id_herramienta) REFERENCES herramienta (id_H),
    CONSTRAINT fk_cliente FOREIGN KEY (rut_cliente) REFERENCES cliente (rut)
);

INSERT INTO empresa (rut, nombre, direccion, telefono, correo, web)
VALUES ('1234567890', 
	'Ferreteria SQL', 
	'Avenida Acacia 22', 
	'123456789', 
	'contacto@ferreteria.com', 
	'www.ferreteria.com'
);

INSERT INTO herramienta (id_H, nombre, precioDia)
VALUES (1, 'Martillo', 500),
       (2, 'Taladro', 1500),
       (3, 'Sierra', 2000),
       (4, 'Destornillador', 300),
       (5, 'Llave Inglesa', 700);

INSERT INTO cliente (rut, nombre, direccion, celular, correo, rut_empresa)
VALUES ('1111111111', 'Alberto Aravena', 'Avenida Siempre Viva 742', '987654321', 'cliente1@correo.com', '1234567890'),
       ('2222222222', 'Gerson Bustos', 'Calle Principal 456', '876543210', 'cliente2@correo.com', '1234567890'),
       ('3333333333', 'Carl Johnson', 'Groove Street s/n', '765432109', 'cliente3@correo.com', '1234567890'),
	('4444444444', 'Ernesto Heller', 'Boulevard Central 789', '765896759', 'cliente4@correo.com', '1234567890');

DELETE FROM cliente
WHERE rut = '4444444444';

DELETE FROM herramienta
WHERE id_H = 1;

INSERT INTO arriendo (folio, fecha, dias, valorDia, garantia, precioDia, id_herramienta, rut_cliente)
VALUES (1, '2024-08-30', 3, 500, '1000', 500, 2, '1111111111'),
       (2, '2024-08-31', 5, 1500, '2000', 1500, 3, '1111111111'),
       (3, '2024-08-30', 2, 2000, '3000', 2000, 4, '2222222222'),
       (4, '2024-08-31', 4, 300, '500', 300, 5, '2222222222'),
       (5, '2024-08-30', 1, 700, '1000', 700, 2, '3333333333'),
       (6, '2024-08-31', 6, 1500, '2500', 1500, 3, '3333333333');

UPDATE cliente
SET correo = 'nuevo_correo@correo.com'
WHERE rut = '1111111111';

SELECT * FROM herramienta;

SELECT * FROM arriendo
WHERE rut_cliente = '2222222222';

SELECT * FROM cliente
WHERE nombre LIKE '%a%';



