import { Test, TestingModule } from '@nestjs/testing';
import { GovernorController } from './governor.controller';

describe('GovernorController', () => {
    let controller: GovernorController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [GovernorController],
        }).compile();

        controller = module.get<GovernorController>(GovernorController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
