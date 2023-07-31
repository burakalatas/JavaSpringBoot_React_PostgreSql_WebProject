--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 15rc2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: projectDB; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "projectDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Turkish_Turkey.1254';


ALTER DATABASE "projectDB" OWNER TO postgres;

\connect "projectDB"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event (
    event_type character varying(31) NOT NULL,
    id integer NOT NULL,
    content character varying(10000),
    subject character varying(1000),
    validity_date date,
    image character varying(1500),
    newsaddress character varying(10000)
);


ALTER TABLE public.event OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- Name: event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.event (event_type, id, content, subject, validity_date, image, newsaddress) VALUES ('news', 70, 'Haziranda ihracat 20 milyar 904 milyon dolar, ithalat ise 26 milyar 64 milyon dolar olarak gerçekleşti. Böylece geçtiğimiz ay dış ticaret açığı 5 milyar 160 milyon dolar oldu.  Türkiye İstatistik Kurumu (TÜİK) haziran ayına ilişkin dış ticaret istatistiklerini açıkladı. Buna göre ihracat haziranda bir önceki yılın aynı ayına göre %10,5 azalarak 20 milyar 904 milyon dolar, ithalat %17,5 azalarak 26 milyar 64 milyon dolar olarak gerçekleşti.', 'Türkiye, dış ticarette 5 milyar dolar açık verdi', '2023-07-31', NULL, 'https://www.haberler.com/ekonomi/dis-ticaret-acigi-haziran-da-yuzde-37-3-azaldi-16165515-haberi/');
INSERT INTO public.event (event_type, id, content, subject, validity_date, image, newsaddress) VALUES ('announcement', 72, 'Sitemizde 15 ağustos tarihinde gün boyu bakım çalışması yapılacaktır. Üyelerimiz bu tarihde sitemize erişemeyeceklerdir.', 'Planlı bakım çalışması', '2023-08-15', '1690785850337bakim.jpg', NULL);
INSERT INTO public.event (event_type, id, content, subject, validity_date, image, newsaddress) VALUES ('news', 71, 'Ticaret Bakanlığı otomotiv, gıda ve diğer temel ihtiyaç maddelerindeki fahiş fiyat artışı ve stokçulukla ilgili mücadelesine devam ediyor. Bu kapsamda 2023 yılında vatandaşları mağdur eden fırsatçılara 176''sı marketler olmak üzere toplam 361 milyon TL ceza kesildi.  Ticaret Bakanı Ömer Bolat, sosyal medya hesabından stokçuluk ve fahiş fiyata karşı aldıkları önlemleri paylaştı. Otomotiv, gıda ve diğer temel ihtiyaç maddelerindeki fahiş fiyat artışı ve stokçulukla ilgili mücadeleye aralıksız devam ettiklerini belirten Bakan Bolat, 2023 yılında fırsatçılara toplamda 361 milyon TL ceza kesildiğini belirtti.', 'Fahiş fiyat artışı ve stokçuluk yapanlara 2023 yılında 361 milyon TL ceza kesildi', '2023-08-07', NULL, 'https://www.haberler.com/ekonomi/ticaret-bakani-omer-bolat-fahis-fiyat-artisi-ve-stokculukla-mucadeleyi-surduruyor-16165242-haberi/');
INSERT INTO public.event (event_type, id, content, subject, validity_date, image, newsaddress) VALUES ('announcement', 73, 'Her sene ağustos ayında düzenlediğimiz toplantımızı bu sene havaların aşırı sıcak olmasından dolayı eylül ayına ertelemeye karar verdik. Anlayışınız için teşekkür ederiz.', 'Geleneksel Toplantı', '2023-09-01', '1690786084188toplanti.jpg', NULL);


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.event_id_seq', 77, true);


--
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

