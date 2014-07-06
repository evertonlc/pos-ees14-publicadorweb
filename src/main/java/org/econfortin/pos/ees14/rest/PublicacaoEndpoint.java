package org.econfortin.pos.ees14.rest;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import org.econfortin.pos.ees14.model.Publicacao;

/**
 * 
 */
@Stateless
@Path("/publicacaos")
public class PublicacaoEndpoint
{
   @PersistenceContext(unitName="publicadorweb-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(Publicacao entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(PublicacaoEndpoint.class).path(String.valueOf(entity.getId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Long id)
   {
      Publicacao entity = em.find(Publicacao.class, id);
      if (entity == null) {
        return Response.status(Status.NOT_FOUND).build();
      }
      em.remove(entity);
      return Response.noContent().build();
   }

   @GET
   @Path("/{id:[0-9][0-9]*}")
   @Produces("application/json")
   public Response findById(@PathParam("id") Long id)
   {
      TypedQuery<Publicacao> findByIdQuery = em.createQuery("SELECT DISTINCT p FROM Publicacao p WHERE p.id = :entityId ORDER BY p.id", Publicacao.class);
      findByIdQuery.setParameter("entityId", id);
      Publicacao entity;
      try {
         entity = findByIdQuery.getSingleResult();
      } catch (NoResultException nre) {
         entity = null;
      }
      if (entity == null) {
        return Response.status(Status.NOT_FOUND).build();
      }
      return Response.ok(entity).build();
   }

   @GET
   @Produces("application/json")
   public List<Publicacao> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<Publicacao> findAllQuery = em.createQuery("SELECT DISTINCT p FROM Publicacao p ORDER BY p.id", Publicacao.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<Publicacao> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(Publicacao entity)
   {
      entity = em.merge(entity);
      return Response.noContent().build();
   }
}