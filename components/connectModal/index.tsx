import React, { FC, useState } from "react";
import Image from "next/image";
import BaseModal, { BaseModalProps } from "components/baseModal";
import MatamaskIcon from "public/assets/metamask.svg";
import WalletConnectIcon from "public/assets/wallet_connect.svg";
import CoinbaseIcon from "public/assets/coinbase.svg";

type ConnectModalProps = {
  modalTitle: string;
  modalType?: string;
} & BaseModalProps;

const ConnectModal: FC<ConnectModalProps> = ({ open, onClose, modalTitle }) => {
  return (
    <BaseModal open={open} onClose={onClose} title={modalTitle}>
      <p className="text-sm text-gray-500 w-80">
        Connect with one of our available wallet providers or create a new one.
      </p>
      <div className=" py-2">
        <div className="mt-4 relative">
          <button className="w-full big-btn bg-gray-100 gap-2 !justify-start">
            <Image src={MatamaskIcon} alt={"metamask"} width={24} height={24} />
            MetaMask
          </button>
          <span className="absolute text-xs font-medium text-gray-500 bg-gray-200 rounded-3xl px-3 py-1 top-3 right-4">
            Popular
          </span>
        </div>
        <div className="mt-4">
          <button className="w-full big-btn bg-gray-100 gap-2 !justify-start">
            <Image src={CoinbaseIcon} alt={"coinbase"} width={24} height={24} />
            Coinbase Wallet
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full big-btn bg-gray-100 gap-2 !justify-start">
            <Image src={WalletConnectIcon} alt={"wallet connect"} width={24} height={24} />
            WalletConnect
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ConnectModal;
