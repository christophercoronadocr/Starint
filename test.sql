USE [master]
GO
/****** Object:  Database [Starint]    Script Date: 15/08/2023 22:34:39 ******/
CREATE DATABASE [Starint]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Starint', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Starint.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Starint_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Starint_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Starint] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Starint].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Starint] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Starint] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Starint] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Starint] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Starint] SET ARITHABORT OFF 
GO
ALTER DATABASE [Starint] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Starint] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Starint] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Starint] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Starint] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Starint] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Starint] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Starint] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Starint] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Starint] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Starint] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Starint] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Starint] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Starint] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Starint] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Starint] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Starint] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Starint] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Starint] SET  MULTI_USER 
GO
ALTER DATABASE [Starint] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Starint] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Starint] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Starint] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Starint] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Starint] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Starint] SET QUERY_STORE = OFF
GO
USE [Starint]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[Apellido] [nvarchar](50) NOT NULL,
	[DNI] [nvarchar](50) NOT NULL,
	[Telefono] [nvarchar](20) NOT NULL,
	[Pais] [nvarchar](50) NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Contrasena] [nvarchar](50) NOT NULL,
	[Estado] [bit] NOT NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PlanDescripcion]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PlanDescripcion](
	[IdDescripcion] [int] IDENTITY(1,1) NOT NULL,
	[IdPlan] [int] NOT NULL,
	[Descripcion] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IdDescripcion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Planes]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Planes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[Precio] [decimal](18, 2) NOT NULL,
	[IdServicio] [int] NOT NULL,
	[Imagen] [nvarchar](200) NOT NULL,
	[Informacion] [nvarchar](max) NULL,
 CONSTRAINT [PK__Planes__3214EC0708764E37] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Servicios]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicios](
	[IdServicio] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[Descripcion] [nvarchar](50) NOT NULL,
	[Vigente] [bit] NOT NULL,
 CONSTRAINT [PK_Servicios] PRIMARY KEY CLUSTERED 
(
	[IdServicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suscripcion]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suscripcion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdCliente] [int] NOT NULL,
	[FechaExpiracion] [date] NOT NULL,
	[IdPlan] [int] NOT NULL,
 CONSTRAINT [PK__Servicio__3214EC07D3CA4F27] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Clientes] ON 

INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1054, N'ethel', N'duarte', N'512332145', N'84956231', N'Costa Rica', CAST(N'1970-08-06' AS Date), N'string', N'string', 1)
INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1055, N'ffffff', N'Coronado', N'502390801', N'88086844', N'Costa Rica', CAST(N'2023-08-02' AS Date), N'test@gmail.com', N'24021994', 1)
INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1056, N'test', N'aaaa', N'12342342', N'88888888', N'Costa Rica', CAST(N'2023-08-02' AS Date), N'admchris@gmail.com', N'24021994', 1)
INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1057, N'Genaro', N'Coronado', N'123456', N'84534211', N'Costa Rica', CAST(N'2023-08-01' AS Date), N'genaro@gmail.com', N'12345678', 1)
INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1058, N'Isaias Isaías', N'Coronado', N'1234234234', N'88086844', N'Costa Rica', CAST(N'2023-08-02' AS Date), N'aaaaa@gmail.com', N'12345678', 1)
INSERT [dbo].[Clientes] ([Id], [Nombre], [Apellido], [DNI], [Telefono], [Pais], [FechaNacimiento], [Email], [Contrasena], [Estado]) VALUES (1059, N'ethel', N'duarte', N'512332145', N'84956231', N'Costa Rica', CAST(N'1970-08-06' AS Date), N'string2', N'string', 1)
SET IDENTITY_INSERT [dbo].[Clientes] OFF
GO
SET IDENTITY_INSERT [dbo].[PlanDescripcion] ON 

INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1, 1, N'20 MB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (2, 1, N'10 MB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (3, 1, N'Cable Coaxial')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (4, 1, N'150 GB disponible para descargar')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (5, 1, N'Instalación Gratuita')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (6, 2, N'50 GB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (7, 2, N'50 GB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (9, 2, N'Cable Coaxial')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (10, 2, N'Descargas ilimitadas')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (11, 2, N'Instalación Gratuita')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (12, 3, N'100 GB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (13, 3, N'100 GB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (14, 3, N'Fibra Optica')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (15, 3, N'Descargas ilimitadas')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (16, 3, N'Instalación Gratuita')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (17, 3, N'Soporte 24/7')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (18, 3, N'Portabilidad')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1001, 4, N'Juegos mensuales')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1002, 4, N'Multijugador online')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1003, 4, N'Descuentos exclusivos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1004, 4, N'Contenido exclusivo')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1005, 4, N'Almacenamiento en la nube')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1006, 4, N'Share Play')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1007, 4, N'Colección PlayStation Plus*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1008, 4, N'Ayuda de juego*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1009, 4, N'Catálogo de juegos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1010, 4, N'Ubisoft+ Classics')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1011, 4, N'Catálogo de clásicos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1012, 4, N'Pruebas de juegos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1013, 5, N'Juegos mensuales')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1014, 5, N'Multijugador online')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1015, 5, N'Descuentos exclusivos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1016, 5, N'Contenido exclusivo')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1017, 5, N'Almacenamiento en la nube')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1018, 5, N'Share Play')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1019, 5, N'Colección PlayStation Plus*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1020, 5, N'Ayuda de juego*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1021, 5, N'Catálogo de juegos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1022, 5, N'Ubisoft+ Classics')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1023, 6, N'Juegos mensuales')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1024, 6, N'Multijugador online')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1025, 6, N'Descuentos exclusivos')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1026, 6, N'Contenido exclusivo')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1027, 6, N'Almacenamiento en la nube')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1028, 6, N'Share Play')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1029, 6, N'Colección PlayStation Plus*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1030, 6, N'Ayuda de juego*')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1031, 7, N'200 MB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1032, 7, N'100 MB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1033, 7, N'Cable Coaxial')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1034, 7, N'1500 GB disponible para descargar')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1035, 7, N'Instalación Gratuita')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1036, 8, N'500 GB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1037, 8, N'500 GB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1038, 8, N'Cable Coaxial')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1039, 8, N'Descargas ilimitadas')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1040, 8, N'Instalación Gratuita')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1041, 9, N'1000 GB de descarga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1042, 9, N'1000 GB de carga')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1043, 9, N'Fibra Optica')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1044, 9, N'Descargas ilimitadas')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1045, 9, N'Soporte 24/7')
INSERT [dbo].[PlanDescripcion] ([IdDescripcion], [IdPlan], [Descripcion]) VALUES (1046, 9, N'Portabilidad')
SET IDENTITY_INSERT [dbo].[PlanDescripcion] OFF
GO
SET IDENTITY_INSERT [dbo].[Planes] ON 

INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (1, N'Básico', CAST(9.99 AS Decimal(18, 2)), 1, N'https://blog.miscondominios.com/wp-content/uploads/2020/10/condominio-residencial.jpg', N'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (2, N'Standard', CAST(14.99 AS Decimal(18, 2)), 1, N'https://blog.miscondominios.com/wp-content/uploads/2020/10/condominio-residencial.jpg', N'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (3, N'Premium', CAST(19.99 AS Decimal(18, 2)), 1, N'https://blog.miscondominios.com/wp-content/uploads/2020/10/condominio-residencial.jpg', N'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (4, N'DELUXE', CAST(79.99 AS Decimal(18, 2)), 3, N'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-extra-game-catalog-image-block-01-en-15mar23?$1000px--t$', N'Descubre todos los beneficios')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (5, N'EXTRA', CAST(66.99 AS Decimal(18, 2)), 3, N'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-extra-game-catalog-image-block-01-en-15mar23?$1000px--t$', N'Descubre cientos de juegos')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (6, N'ESSENTIAL', CAST(39.99 AS Decimal(18, 2)), 3, N'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-extra-game-catalog-image-block-01-en-15mar23?$1000px--t$', N'Juegos mensuales, multijugador online y mucho más')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (7, N'Basic', CAST(99.99 AS Decimal(18, 2)), 2, N'https://www.ceupe.com.ve/images/easyblog_articles/228/b2ap3_large_ges.jpg', N'JIt is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (8, N'Standard', CAST(199.99 AS Decimal(18, 2)), 2, N'https://www.ceupe.com.ve/images/easyblog_articles/228/b2ap3_large_ges.jpg', N'JIt is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
INSERT [dbo].[Planes] ([Id], [Nombre], [Precio], [IdServicio], [Imagen], [Informacion]) VALUES (9, N'Premium', CAST(299.99 AS Decimal(18, 2)), 2, N'https://www.ceupe.com.ve/images/easyblog_articles/228/b2ap3_large_ges.jpg', N'JIt is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit..')
SET IDENTITY_INSERT [dbo].[Planes] OFF
GO
SET IDENTITY_INSERT [dbo].[Servicios] ON 

INSERT [dbo].[Servicios] ([IdServicio], [Nombre], [Descripcion], [Vigente]) VALUES (1, N'Internet Residencial', N'cambiar descripcion mas adelante', 1)
INSERT [dbo].[Servicios] ([IdServicio], [Nombre], [Descripcion], [Vigente]) VALUES (2, N'Internet Empresarial', N'cambiar mas adelante', 0)
INSERT [dbo].[Servicios] ([IdServicio], [Nombre], [Descripcion], [Vigente]) VALUES (3, N'StarInt Game Pass', N'cambiar mas adelante', 0)
SET IDENTITY_INSERT [dbo].[Servicios] OFF
GO
SET IDENTITY_INSERT [dbo].[Suscripcion] ON 

INSERT [dbo].[Suscripcion] ([Id], [IdCliente], [FechaExpiracion], [IdPlan]) VALUES (11, 1057, CAST(N'2024-08-14' AS Date), 1)
INSERT [dbo].[Suscripcion] ([Id], [IdCliente], [FechaExpiracion], [IdPlan]) VALUES (12, 1057, CAST(N'2024-08-14' AS Date), 5)
INSERT [dbo].[Suscripcion] ([Id], [IdCliente], [FechaExpiracion], [IdPlan]) VALUES (13, 1057, CAST(N'2024-08-14' AS Date), 7)
SET IDENTITY_INSERT [dbo].[Suscripcion] OFF
GO
ALTER TABLE [dbo].[Planes] ADD  CONSTRAINT [DF_Planes_imagen]  DEFAULT (N'a') FOR [Imagen]
GO
ALTER TABLE [dbo].[PlanDescripcion]  WITH CHECK ADD  CONSTRAINT [FK_PLAN_DESCRIPCION] FOREIGN KEY([IdPlan])
REFERENCES [dbo].[Planes] ([Id])
GO
ALTER TABLE [dbo].[PlanDescripcion] CHECK CONSTRAINT [FK_PLAN_DESCRIPCION]
GO
ALTER TABLE [dbo].[Planes]  WITH CHECK ADD  CONSTRAINT [FK_SERVICIOS_PLANES] FOREIGN KEY([IdServicio])
REFERENCES [dbo].[Servicios] ([IdServicio])
GO
ALTER TABLE [dbo].[Planes] CHECK CONSTRAINT [FK_SERVICIOS_PLANES]
GO
ALTER TABLE [dbo].[Suscripcion]  WITH CHECK ADD  CONSTRAINT [FK_CLIENTE_SERVICIORENTADO] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Clientes] ([Id])
GO
ALTER TABLE [dbo].[Suscripcion] CHECK CONSTRAINT [FK_CLIENTE_SERVICIORENTADO]
GO
ALTER TABLE [dbo].[Suscripcion]  WITH CHECK ADD  CONSTRAINT [FK_SERVICIO_PLAN] FOREIGN KEY([IdPlan])
REFERENCES [dbo].[Planes] ([Id])
GO
ALTER TABLE [dbo].[Suscripcion] CHECK CONSTRAINT [FK_SERVICIO_PLAN]
GO
/****** Object:  StoredProcedure [dbo].[SP_Details_in_PlanDescripcionTable]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Christopher Coronado
-- Create date: 13/08/2023
-- Description:	Insert Plans in table planes
-- =============================================
CREATE PROCEDURE [dbo].[SP_Details_in_PlanDescripcionTable] (
	@IDPLAN INT,
	@DESCRIPCION NVARCHAR(50)
	)
AS
BEGIN

    -- Insert statements for procedure here
	INSERT INTO PlanDescripcion(IdPlan, Descripcion) VALUES (@IDPLAN, @DESCRIPCION)
END
GO
/****** Object:  StoredProcedure [dbo].[SP_Plans_in_PlanesTable]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Christopher Coronado
-- Create date: 13/08/2023
-- Description:	Insert Plans in table planes
-- =============================================
CREATE PROCEDURE [dbo].[SP_Plans_in_PlanesTable] (
	@NOMBRE NVARCHAR(50),
	@PRECIO DECIMAL(18,2),
	@IDSERVICIO INT,
	@IMAGEN NVARCHAR(200),
	@INFORMACION NVARCHAR(MAX)
	)
AS
BEGIN

    -- Insert statements for procedure here
	INSERT INTO Planes (Nombre, Precio, IdServicio, Imagen, Informacion) VALUES (@NOMBRE,@PRECIO,@IDSERVICIO,@IMAGEN,@INFORMACION)
END
GO
/****** Object:  StoredProcedure [dbo].[SP_REGISTER_CLIENT]    Script Date: 15/08/2023 22:34:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		CHRISTOPHER CORONADO DUARTE
-- Create date: 05/08/2023
-- Description:	REGISTER CLIENT
-- =============================================
CREATE PROCEDURE [dbo].[SP_REGISTER_CLIENT]
	@NOMBRE NVARCHAR(50),
	@APELLIDO NVARCHAR(50),
	@DNI NVARCHAR(50),
	@TELEFONO NVARCHAR(50),
	@PAIS NVARCHAR(50),
	@EMAIL NVARCHAR(50),
	@CONTRASENA NVARCHAR(50),
	@FECHANACIMIENTO NVARCHAR(50),
    @ROUTPUT INT OUTPUT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.

	BEGIN TRANSACTION
	BEGIN TRY

		INSERT INTO Clientes (Nombre, Apellido, DNI, Telefono, Pais, FechaNacimiento, Email, Contrasena, Estado)
		VALUES (@NOMBRE, @APELLIDO, @DNI, @TELEFONO, @PAIS, CONVERT(date, @FECHANACIMIENTO, 103), @EMAIL, @CONTRASENA, 1)

		SET @ROUTPUT = SCOPE_IDENTITY()
		SELECT @ROUTPUT

	COMMIT TRANSACTION
	END TRY
	
	BEGIN CATCH
	SELECT ERROR_MESSAGE()
	SELECT -1
	ROLLBACK TRANSACTION
	END CATCH
END
GO
USE [master]
GO
ALTER DATABASE [Starint] SET  READ_WRITE 
GO
