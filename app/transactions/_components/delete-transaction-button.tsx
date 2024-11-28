import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";

import { Transaction } from "@prisma/client";
import { TrashIcon } from "lucide-react";

interface DeleteTransactionButtonProps {
  transaction: Transaction;
}

const DeleteTransactionButton = ({
  transaction,
}: DeleteTransactionButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button size="icon" className="text-muted-foreground" variant="ghost">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja excluir esta transação?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente estes
            dados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="bg-danger hover:border-[1px] hover:border-danger hover:bg-red-700 hover:bg-opacity-0 hover:text-danger">
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionButton;
