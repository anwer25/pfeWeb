import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	HttpException,
	HttpStatus,
	Post,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { AuthService, RegistrationStatus } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../users/users.user.dto';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiBearerAuth('register')
	// @UseGuards(JwtAuthGuard)
	@ApiSecurity('access-key')
	// @UseInterceptors(ClassSerializerInterceptor)
	@Post('register')
	public async register(
		@Body() createUserDto: CreateUserDto,
	): Promise<RegistrationStatus> {
		const result: RegistrationStatus = await this.authService.register(
			createUserDto,
		);
		if (!result.success) {
			throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	@Post('login')
	public async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
		return await this.authService.login(loginUserDto);
	}
}
