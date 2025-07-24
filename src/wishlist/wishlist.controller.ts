import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  addToWishlist(@Body() data: any) {
    return this.wishlistService.addToWishlist(data);
  }

  @Get(':userId')
  getWishlist(@Param('userId') userId: string) {
    return this.wishlistService.getWishlist(userId);
  }

  // ✅ NUEVO: eliminar un peluche de la lista
  @Delete(':userId/:plushieId')
  removeFromWishlist(@Param('userId') userId: string, @Param('plushieId') plushieId: string) {
    return this.wishlistService.removeFromWishlist(userId, plushieId);
  }
}
