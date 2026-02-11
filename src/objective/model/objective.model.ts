import { User } from 'src/user/model/user.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FrequencyTypes } from './objective.enum';

@Entity({ name: 'objective' })
export class Objective {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: false })
  title: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ type: 'enum', enum: FrequencyTypes, default: FrequencyTypes.DAILY })
  frequency: FrequencyTypes;

  @Column({ type: 'jsonb', nullable: true })
  frequencyDays: number[];

  @ManyToOne(() => User, (user) => user.objectives)
  user: User;
}
