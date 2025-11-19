create database fitlife;
use fitlife;

create table usuarios(
idUsuario int primary key auto_increment,
nome varchar(45) not null,
altura decimal (3,2),
peso decimal (5,2),
dtNasc date,
dispTreino int,
prioridade varchar(45),
email varchar(45),
senha varchar(45)
);

create table medidas(
idMedidas int,
fkUsuario int,
	constraint pkComposta
		primary key (idMedidas,fkUsuario),
dtRegistro timestamp default current_timestamp,
	constraint usuarioMedidas
		foreign key (fkUsuario) references usuarios (idUsuario),
peito int,
bracoEsq int,
bracoDir int,
coxa int,
panturrilha int,
cintura int
);

create table divtreino(
idDivisao int primary key,
tipo varchar(45),
diasSemana int,
fkUsuario int,
	constraint UsuarioDiv
		foreign key (fkUsuario) references usuarios (idUsuario),
fkTreino int,
	constraint treinoDiv
		foreign key (fkTreino) references divtreino (idDivisao),
descricao varchar(200)
);

select * from usuarios;
