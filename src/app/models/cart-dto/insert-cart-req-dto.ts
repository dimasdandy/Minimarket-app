import { InsertCartReqDtoDetail } from "./insert-cart-req-dto-detail";
import { InsertCartReqDtoHeader } from "./insert-cart-req-dto-header";

export class InsertCartReqDto{
    header: InsertCartReqDtoHeader = new InsertCartReqDtoHeader();
    details?: InsertCartReqDtoDetail[]
}