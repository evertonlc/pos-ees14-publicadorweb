package org.econfortin.pos.ees14.model;


import javax.persistence.Entity;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;

import java.lang.Override;
import javax.xml.bind.annotation.XmlRootElement;@Entity
@Table(name = "PUBLICACAO")
@XmlRootElement
public class Publicacao implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	@Version
	@Column(name = "version")
	private int version;
	
	private String titulo;
	
	private Integer anoPublicacao;
	
	private Integer edicao;
	
	private String editora;
	
	@Enumerated(EnumType.STRING)
	private TipoPublicacao tipoPublicacao;
	
	private String autoresTexto;
	
	@Enumerated(EnumType.STRING)
	private Natureza natureza;
	
	@Enumerated(EnumType.STRING)
	private Alcance alcance;
	
	private Boolean publicada;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public int getVersion() {
		return this.version;
	}

	public void setVersion(final int version) {
		this.version = version;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Integer getAnoPublicacao() {
		return anoPublicacao;
	}

	public void setAnoPublicacao(Integer anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}

	public Integer getEdicao() {
		return edicao;
	}

	public void setEdicao(Integer edicao) {
		this.edicao = edicao;
	}

	public String getEditora() {
		return editora;
	}

	public void setEditora(String editora) {
		this.editora = editora;
	}

	public TipoPublicacao getTipoPublicacao() {
		return tipoPublicacao;
	}

	public void setTipoPublicacao(TipoPublicacao tipoPublicacao) {
		this.tipoPublicacao = tipoPublicacao;
	}

	public String getAutoresTexto() {
		return autoresTexto;
	}

	public void setAutoresTexto(String autoresTexto) {
		this.autoresTexto = autoresTexto;
	}

	public Natureza getNatureza() {
		return natureza;
	}

	public void setNatureza(Natureza natureza) {
		this.natureza = natureza;
	}

	public Alcance getAlcance() {
		return alcance;
	}

	public void setAlcance(Alcance alcance) {
		this.alcance = alcance;
	}

	public Boolean getPublicada() {
		return publicada;
	}

	public void setPublicada(Boolean publicada) {
		this.publicada = publicada;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		if (id != null)
			result += "id: " + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Publicacao)) {
			return false;
		}
		Publicacao other = (Publicacao) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	} }