import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contract } from "./contract.entity";

@Entity()
export class MethodPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  description: string;

  /**
   *
   */
  @OneToMany(() => Contract, (contract) => contract.methodPayment)
  contracts: Contract[];
}
