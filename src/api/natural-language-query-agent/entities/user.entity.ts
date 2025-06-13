import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  org: string;

  @Column('date')
  creation_date: string;

  @Column('text')
  address: string;
} 