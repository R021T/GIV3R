"use client"
import { FormEvent } from "react"
import styles from "./payments.module.css"
import { useRouter } from "next/navigation"
import SolidFundrABI from "../../../artifacts/contracts/SolidFundr.sol/SolidFundr.json";
import { ethers } from "../../../node_modules/ethers/lib/index"

export default function Form({details}: any) {
    const router=useRouter()
    const contractABI = SolidFundrABI.abi;
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    
    const initWallet=async()=>{
        if(window.ethereum){
            const ethWallet=window.ethereum
            const provider = new ethers.providers.Web3Provider(ethWallet);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            return contract
        }
    }
    
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)

        const contract=await initWallet()
        const amount = ethers.BigNumber.from(formData.get("amount"))
        try {
            const donationTx = await contract?.donate(0, { value: amount });
            await donationTx.wait();
            const response=await fetch("/api/payments",{
                method:"POST",
                body: JSON.stringify({
                    type: formData.get("type"),
                    from: formData.get("from"),
                    to: formData.get("to"),
                    left: formData.get("left"),
                    amount: formData.get("amount")
                })
            })
            if(response){
                router.push("/profile")
                router.refresh()
            }
            alert("Donation successful!");
        } 
        catch (error) {
            console.error("Error donating to fund:", error);
            alert("Failed to donate to fund. Please try again.");
        }
    }
    return(
        <>
        {details.map((details: any, index: number)=>(
            <form className={styles.form} key={index} onSubmit={handleSubmit}>
                <div className={styles.left}>
                    <div className={styles.type}>
                        <div className={styles.label}>
                            <label>Type :</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" name="type" value={details.type} readOnly required></input>
                        </div>
                    </div>
                    <div className={styles.from}>
                        <div className={styles.label}>
                            <label>From :</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" name="from" value={details.from} readOnly required></input>
                        </div>
                    </div>
                    <div className={styles.to}>
                        <div className={styles.label}>
                            <label>To :</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" name="to" value={details.to} readOnly required></input>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.balance}>
                        <div className={styles.label}>
                            <label>Raise left :</label>
                        </div>
                        <div className={styles.input}>
                            <input type="number" name="left" value={details.left} readOnly required></input>
                        </div>
                    </div>
                    <div className={styles.amount}>
                        <div className={styles.label}>
                            <label>Enter amount :</label>
                        </div>
                        <div className={styles.input}>
                            <input type="number" name="amount" placeholder="Enter amount in ETH" required></input>
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <input type="submit"></input>
                    </div>
                </div>
            </form>
        ))}
        </>
    )
}