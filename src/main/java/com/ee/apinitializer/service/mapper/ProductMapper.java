package com.ee.apinitializer.service.mapper;

import com.ee.apinitializer.domain.Product;
import com.ee.apinitializer.service.dto.ProductDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Product} and its DTO {@link ProductDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {}
