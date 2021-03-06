USE [DatabaseFirst]
GO
/****** Object:  Table [dbo].[Money]    Script Date: 04.07.2016 0:06:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Money](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NULL,
	[type_id] [int] NOT NULL,
	[count] [int] NOT NULL DEFAULT ((0)),
	[active] [tinyint] NOT NULL DEFAULT ((1)),
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product]    Script Date: 04.07.2016 0:06:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[code] [int] NOT NULL,
	[name] [nvarchar](20) NULL,
	[type_id] [int] NOT NULL,
	[size] [nvarchar](10) NULL,
	[size_type_id] [int] NOT NULL,
	[count] [int] NOT NULL DEFAULT ((0)),
	[price] [float] NOT NULL,
	[active] [tinyint] NOT NULL DEFAULT ((1)),
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Type]    Script Date: 04.07.2016 0:06:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Type](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NULL,
	[active] [tinyint] NOT NULL DEFAULT ((1)),
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Money] ON 

INSERT [dbo].[Money] ([Id], [name], [type_id], [count], [active]) VALUES (1, N'1', 3, 100, 1)
INSERT [dbo].[Money] ([Id], [name], [type_id], [count], [active]) VALUES (2, N'20', 4, 100, 1)
INSERT [dbo].[Money] ([Id], [name], [type_id], [count], [active]) VALUES (3, N'50', 4, 100, 1)
INSERT [dbo].[Money] ([Id], [name], [type_id], [count], [active]) VALUES (4, N'5', 3, 100, 1)
INSERT [dbo].[Money] ([Id], [name], [type_id], [count], [active]) VALUES (5, N'10', 4, 100, 1)
SET IDENTITY_INSERT [dbo].[Money] OFF
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (1, 1, N'coca cola', 1, N'500', 6, 5, 0.6, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (2, 2, N'sprite', 1, N'500', 6, 5, 0.6, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (4, 3, N'pepsi', 1, N'500', 6, 5, 0.6, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (6, 4, N'ice tea', 1, N'330', 6, 5, 0.8, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (7, 5, N'fuse tea', 1, N'1', 5, 5, 1, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (8, 6, N'lays', 2, N'50', 7, 5, 0.7, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (10, 7, N'doritos acılı', 2, N'100', 7, 5, 0.9, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (12, 8, N'pringles', 2, N'170', 7, 5, 1.5, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (14, 9, N'kracks', 2, N'160', 7, 5, 1.2, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (15, 10, N'm&ms', 8, N'45', 7, 5, 1, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (17, 11, N'oreo', 8, N'176', 7, 5, 2, 1)
INSERT [dbo].[Product] ([Id], [code], [name], [type_id], [size], [size_type_id], [count], [price], [active]) VALUES (18, 12, N'tutku', 8, N'120', 7, 5, 0.7, 1)
SET IDENTITY_INSERT [dbo].[Product] OFF
SET IDENTITY_INSERT [dbo].[Type] ON 

INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (1, N'içkilər', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (2, N'chips', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (3, N'manat', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (4, N'qəpik', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (5, N'litr', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (6, N'ml', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (7, N'qr', 1)
INSERT [dbo].[Type] ([Id], [name], [active]) VALUES (8, N'şirniyat', 1)
SET IDENTITY_INSERT [dbo].[Type] OFF
/****** Object:  Index [UQ__tmp_ms_x__357D4CF96DA2EA54]    Script Date: 04.07.2016 0:06:19 ******/
ALTER TABLE [dbo].[Product] ADD UNIQUE NONCLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Money]  WITH CHECK ADD  CONSTRAINT [FK_Money_Type] FOREIGN KEY([type_id])
REFERENCES [dbo].[Type] ([Id])
GO
ALTER TABLE [dbo].[Money] CHECK CONSTRAINT [FK_Money_Type]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_ToType] FOREIGN KEY([size_type_id])
REFERENCES [dbo].[Type] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_ToType]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Type] FOREIGN KEY([type_id])
REFERENCES [dbo].[Type] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Type]
GO
