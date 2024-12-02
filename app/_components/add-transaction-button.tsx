"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import Link from "next/link";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      {userCanAddTransaction ? (
        <>
          <Button
            className="rounded-full font-bold"
            onClick={() => setDialogIsOpen(userCanAddTransaction)}
          >
            Adicionar transação
            <ArrowDownUpIcon />
          </Button>
          <UpsertTransactionDialog
            isOpen={dialogIsOpen}
            setIsOpen={setDialogIsOpen}
          />
        </>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[500px] max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Adicionar transação</DialogTitle>
              <DialogDescription>
                Você atingiu o limite de transações no plano Básico. Adquira o
                plano Premium para ter lançamentos ilimitados e ainda ter
                insights com IA de sua saúde financeira
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button asChild>
                <Link href="/subscription">Assinar plano premium</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default AddTransactionButton;
